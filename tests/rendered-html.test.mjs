import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function exportedFile(path) {
  return readFile(new URL(`../out/${path}`, import.meta.url), "utf8");
}

test("exports the topic pages with canonical SEO metadata", async () => {
  const [autism, intellectualDisability] = await Promise.all([
    exportedFile("autismo-criciuma.html"),
    exportedFile("deficiencia-intelectual-criciuma.html"),
  ]);

  assert.match(autism, /<title>Acompanhamento para Autismo em Criciúma \| Carla Prado<\/title>/);
  assert.match(autism, /rel="canonical" href="https:\/\/carlaprado\.pages\.dev\/autismo-criciuma"/);
  assert.match(autism, /property="og:image" content="https:\/\/carlaprado\.pages\.dev\/carla-prado-profissional-1122\.jpg"/);
  assert.match(autism, /aria-current="page"[^>]*>Autismo<\/a>/);

  assert.match(intellectualDisability, /<title>Deficiência Intelectual em Criciúma \| Carla Prado<\/title>/);
  assert.match(intellectualDisability, /rel="canonical" href="https:\/\/carlaprado\.pages\.dev\/deficiencia-intelectual-criciuma"/);
  assert.match(intellectualDisability, /property="og:image" content="https:\/\/carlaprado\.pages\.dev\/carla-prado-profissional-1122\.jpg"/);
  assert.match(intellectualDisability, /aria-current="page"[^>]*>Deficiência intelectual<\/a>/);
});

test("keeps internal discovery links and sitemap entries", async () => {
  const [home, sitemap] = await Promise.all([
    exportedFile("index.html"),
    exportedFile("sitemap.xml"),
  ]);

  assert.match(home, /href="\/autismo-criciuma"/);
  assert.match(home, /href="\/deficiencia-intelectual-criciuma"/);
  assert.match(sitemap, /<loc>https:\/\/carlaprado\.pages\.dev\/autismo-criciuma<\/loc>/);
  assert.match(sitemap, /<loc>https:\/\/carlaprado\.pages\.dev\/deficiencia-intelectual-criciuma<\/loc>/);
});

test("keeps the WhatsApp conversion path visible on mobile topic pages", async () => {
  const [autism, styles] = await Promise.all([
    exportedFile("autismo-criciuma.html"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.match(autism, /class="nav-contact"/);
  assert.match(autism, /class="whatsapp-float"/);
  assert.match(styles, /\.topic-header nav\{display:flex;position:static;inset:auto;/);
});
