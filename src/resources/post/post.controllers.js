import { crudControllers } from '../../utils/crud'
import { post } from './post.model'
import puppeteer from 'puppeteer';
import filenamifyUrl from 'filenamify-url';

export default {
  ...crudControllers(post),
  getMany: async (req, res) => {
    try {
      const docs = await post
        .find()
        .sort({ _id: -1 })
        .populate('createdBy', 'username')
        .lean()
        .exec()

      res.status(200).json({ data: docs })
    } catch (e) {
      console.error(e)
      res.status(400).end()
    }
  },
  screenshotUrl: async (req, res) => {
    const { url } = req.query;
    console.log({ url });
    const browser = await puppeteer.launch({ headless: true });     // Launch a "browser"
    
    const page = await browser.newPage();         // Open a new page
    await page.setUserAgent(
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36'
    );
    const filename = filenamifyUrl(url) + '.png';
    await page.goto(url);                         // Go to the website
    await page.screenshot({                       // Screenshot the website using defined options
      path: `./screenshots/${filename}`,          // Save the screenshot in current directory
      // fullPage: true                           // take a fullpage screenshot
    });
    await page.close();                           // Close the website
    await browser.close();   
    return res.send({ url, filename });
  }
}
