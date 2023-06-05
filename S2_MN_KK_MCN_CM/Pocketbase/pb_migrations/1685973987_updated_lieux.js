migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lc4elefi0ha9j78")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uahd7kas",
    "name": "region",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lc4elefi0ha9j78")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uahd7kas",
    "name": "adresse",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
