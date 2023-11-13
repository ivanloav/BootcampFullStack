// Create user
dbAdmin = db.getSiblingDB("admin");

// Create DB and collection
db = new Mongo().getDB("TestBootcamp");
db.createCollection("miColeccion", { capped: false });