import { appSchema, tableSchema } from "@nozbe/watermelondb";

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: "aliments",
      columns: [
        { name: "aliment_id", type: "string", isIndexed: true },
        { name: "name", type: "string" },
        { name: "type", type: "string" },
        { name: "quantity", type: "number" }
      ]
    }),
    tableSchema({
      name: "food",
      columns: [
        { name: "name", type: "string" },
        { name: "ingredients", type: "string" }
      ]
    })
  ]
});
