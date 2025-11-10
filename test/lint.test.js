const path = require("path");
const { ESLint } = require("eslint");
const { test } = require("node:test");
const assert = require("node:assert");

const eslint = new ESLint();

const fixturePath = path.resolve(__dirname, "_fixture");

test("Call eslint on file with errors", async () => {
  const file = path.resolve(fixturePath, "wrong");
  const results = await eslint.lintFiles([file]);

  const messages = results[0].messages.map((m) => ({
    ruleId: m.ruleId,
    message: m.message,
    line: m.line,
  }));

  const expectedMessages = [
    {
      ruleId: "prettier/prettier",
      message: "Delete `·`",
      line: 8,
    },
    {
      ruleId: "prettier/prettier",
      message: "Delete `·`",
      line: 13,
    },
    {
      ruleId: "prettier/prettier",
      message: "Delete `;`",
      line: 18,
    },
    {
      ruleId: "prettier/prettier",
      message: "Replace `\"one\",·\"two\"` with `'one',·'two'`",
      line: 23,
    },
    {
      ruleId: "prettier/prettier",
      message: "Delete `,`",
      line: 30,
    },
    {
      ruleId: "prettier/prettier",
      message: "Replace `array,·object` with `·array,·object·`",
      line: 36,
    },
    {
      ruleId: "no-unused-vars",
      message: "'unused' is assigned a value but never used.",
      line: 41,
    },
    {
      ruleId: "no-undef",
      message: "'undef' is not defined.",
      line: 46,
    },
  ];

  assert.deepStrictEqual(
    messages,
    expectedMessages,
    "Got expected error messages"
  );
});

test("Call eslint on file without errors", async () => {
  const file = path.resolve(fixturePath, "correct");
  const results = await eslint.lintFiles([file]);

  const messages = results[0].messages;

  assert.deepStrictEqual(messages, [], "Got no error messages");
});
