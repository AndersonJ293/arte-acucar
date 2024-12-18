import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    private toastr: ToastrService
  ) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  SignIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.afAuth.authState.subscribe((user) => {
          if (user) {
            this.SetUserData(result.user);
          }
        });
      })
      .catch((error) => {
        switch (error.code) {
          case 'auth/invalid-email':
            this.toastr.error('Endereço de email inválido', 'Erro');
            break;
          case 'auth/invalid-credential':
            this.toastr.error('Senha incorreta', 'Erro');
            break;
          case 'auth/weak-password':
            this.toastr.error('A senha deve ter mais de 6 caracteres', 'Erro');
            break;
          case 'auth/missing-password':
            this.toastr.error('Digite sua senha!', 'Erro');
            break;
          case 'auth/user-not-found':
            this.toastr.error('Usuário não encontrado', 'Erro');
            break;
          default:
            this.toastr.error('Erro ao logar', 'Erro');
        }
      });
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null;
  }

  AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.SetUserData(result.user);
      })
      .catch((error) => {
        switch (error.code) {
          case 'auth/account-exists-with-different-credential':
            this.toastr.error(
              'Essa conta já está associada com um email diferente',
              'Erro'
            );
            break;
          default:
            this.toastr.error('Erro ao autenticar', 'Erro');
        }
      });
  }

  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    userRef.get().subscribe((doc) => {
      if (doc.exists) {
        const userData: User = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          emailVerified: user.emailVerified,
          companyCode: doc.data().companyCode,
        };

        localStorage.setItem('companyCode', userData.companyCode);
        this.router.navigate(['painel']);

        userRef.set(userData, {
          merge: true,
        });
      } else {
        console.log('Documento não encontrado!');
      }
    });
  }

  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      localStorage.removeItem('companyCode');
      this.router.navigate(['sign-in']);
    });
  }
}
