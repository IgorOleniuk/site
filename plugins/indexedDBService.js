import { openDb } from 'idb'

const dbPromise = (_) => {
  if (!('indexedDB' in window)) {
    console.warn('IndexedDB not supported')
    return
  }

  const dbName = 'authTokens'
  const storeName = 'store1'
  const version = 1

  return openDb('dbName', storeName, version, (upgradeDb) => {
    if (!upgradeDb.objectStoreNames.contains(dbName)) {
      upgradeDb.createObjectStore(dbName)
    }
  })
}
console.dir(dbPromise)

const saveToStorage = async (storeName, token) => {
  try {
    const db = await dbPromise()
    const tx = db.transaction(storeName, 'readwrite')
    const store = tx.objectStore(storeName)
    store.put(token, storeName)
    return tx.complete
  } catch (error) {
    return error
  }
}

const checkStorage = async (storeName) => {
  try {
    const db = await dbPromise()
    const tx = db.transaction(storeName, 'readonly')
    const store = tx.objectStore(storeName)
    return store.get(storeName)
  } catch (error) {
    return error
  }
}

export default {
  checkStorage,
  saveToStorage
}
