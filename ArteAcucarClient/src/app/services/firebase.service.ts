import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  uploading$ = new BehaviorSubject<boolean>(false);

  constructor(
    private fireStorage: AngularFireStorage,
    private firestore: AngularFirestore
  ) {}

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

  getCollection(collection: string, typeFilter?: string): Observable<any[]> {
    if (typeFilter) {
      return this.firestore
        .collection(collection, (ref) => ref.where('type', '==', typeFilter))
        .valueChanges();
    } else {
      return this.firestore.collection(collection).valueChanges();
    }
  }
}
