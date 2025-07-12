import { readFileSync } from "fs";
import * as yaml from "js-yaml";
import { join } from "path";

const YAML_FILENAME = "application.yml";
const filePath = join(__dirname,'../', YAML_FILENAME);

export default () => yaml.load(readFileSync(filePath, "utf8")) as Record<string, any>;
