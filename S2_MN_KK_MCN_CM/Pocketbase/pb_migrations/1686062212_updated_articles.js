migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qudotykvwpx2roi")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "z3rhqgcu",
    "name": "favoris",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qudotykvwpx2roi")

  // remove
  collection.schema.removeField("z3rhqgcu")

  return dao.saveCollection(collection)
})
