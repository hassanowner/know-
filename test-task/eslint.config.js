import typescriptParser from "@typescript-eslint/parser";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import prettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

export default [
	{
		files: ["**/*.{ts,tsx}"], // Include TypeScript files
		languageOptions: {
			parser: typescriptParser, // Use TypeScript parser
			ecmaVersion: "latest",
			sourceType: "module",
		},
		plugins: {
			"@typescript-eslint": typescriptPlugin, // Enable TypeScript plugin
			"prettier": prettierPlugin,
		},
		rules: {
			...typescriptPlugin.configs.recommended.rules, // Use TypeScript recommended rules
			"prettier/prettier": "error", // Show Prettier issues as ESLint errors
		},
	},
];
