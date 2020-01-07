import schema from "../models/schema";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";
import { Database } from "@nozbe/watermelondb";
import Aliments from "../models/aliments-model";

const adapter = new SQLiteAdapter({
  schema
});

export const database = new Database({
  adapter,
  modelClasses: [Aliments],
  actionsEnabled: true
});
