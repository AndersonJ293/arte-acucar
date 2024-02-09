import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { BehaviorSubject, Observable, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  uploading$ = new BehaviorSubject<boolean>(false);

  constructor(
    private fireStorage: AngularFireStorage,
    private firestore: AngularFirestore
  ) {}

  getCompanyCode(): string | null {
    const code = localStorage.getItem('companyCode');
    return code !== null ? code : null;
  }

  async postFirebaseFile(file: any, data: any): Promise<string | null> {
    this.uploading$.next(true);

    try {
      const now = new Date();
      const filePath = data.path ? `${data.path}/${file.name}` : file.name;
      const uploadPhoto = await this.fireStorage.upload(filePath, file);
      const url = await uploadPhoto.ref.getDownloadURL();

      await this.firestore.collection(data.collection).ref.add({
        ...data.firestoreData,
        urlImage: url,
        company: this.getCompanyCode(),
        updated_at: now.toISOString(),
        created_at: now.toISOString(),
      });

      return url;
    } catch (error) {
      throw error;
    } finally {
      this.uploading$.next(false);
    }
  }

  async postFirebase(data: any): Promise<string | null> {
    this.uploading$.next(true);

    try {
      const now = new Date();

      await this.firestore.collection(data.collection).add({
        ...data.firestoreData,
        company: this.getCompanyCode(),
        updated_at: now.toISOString(),
        created_at: now.toISOString(),
      });

      return null;
    } catch (error) {
      throw error;
    } finally {
      this.uploading$.next(false);
    }
  }

  getCollectionWithIds(
    collection: string,
    typeFilter?: string
  ): Observable<any[]> {
    const companyCode = this.getCompanyCode();

    if (!companyCode) {
      return throwError(() => new Error('Usuário não associado a uma empresa'));
    }

    if (typeFilter) {
      return this.firestore
        .collection(collection, (ref) =>
          ref
            .where('type', '==', typeFilter)
            .where('company', '==', companyCode)
        )
        .snapshotChanges()
        .pipe(
          map((actions) =>
            actions.map((a) => {
              const data = a.payload.doc.data();
              const id = a.payload.doc.id;
              return { id, data };
            })
          )
        );
    }

    return this.firestore
      .collection(collection, (ref) => ref.where('company', '==', companyCode))
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, data };
          })
        )
      );
  }

  async editarItem(
    collection: string,
    id: string,
    newData: any
  ): Promise<void> {
    try {
      const now = new Date();
      await this.firestore
        .collection(collection)
        .doc(id)
        .update({
          ...newData,
          updated_at: now.toISOString(),
        });
    } catch (error) {
      throw error;
    }
  }

  async excluirItem(collection: string, id: string): Promise<void> {
    try {
      await this.firestore.collection(collection).doc(id).delete();
    } catch (error) {
      throw error;
    }
  }

  getDocumentById(collection: string, id: string): Observable<any> {
    return this.firestore
      .collection(collection)
      .doc(id)
      .snapshotChanges()
      .pipe(
        map((doc) => {
          const data = doc.payload.data();
          const id = doc.payload.id;
          return { id, data };
        })
      );
  }
}
