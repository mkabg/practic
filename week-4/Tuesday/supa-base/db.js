import { creatClient } from "@supabase/supabase-js";
import { config } from "config";
config();

const supaBase = creatClient(process.env.DB_URL, process.env.DB_PUBLIC);
export default supaBase;