/**
 * @Author: Ali
 * @Date:   2019-11-25T10:20:34+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-11-25T14:51:17+01:00
 */
const puppeteer = require("puppeteer");
//IIFE
(async () => {
  // open the browser and prepare a page
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // set the size of the viewport, so our screenshot will have the desired size
  await page.setViewport({
    width: 1280,
    height: 800
  });

  await page.goto("https://wallhaven.cc/random", {
    waitUntil: "networkidle2"
  });
  //Taking a screenshot
  await page.screenshot({
    path: "./data/dict.png",
    fullPage: true
  });

  //Making a PDF from the page
  await page.pdf({ path: "./data/gitali.pdf", format: "A4" });

  await browser.close();
})();
