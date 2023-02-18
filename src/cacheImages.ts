// import { ImgHTMLAttributes } from "react";

/**
 * cacheImages takes in an array of images
 * to cache prior to using them.
 */
async function cacheImages(props:{srcArray: Array<string>}) {
  const promises = props.srcArray.map(src => {
    return new Promise((resolve, reject) => {
      const img = new Image();

      img.src = src;
      img.onload = resolve();
      img.onerror = reject();
    });
  });
  await Promise.all(promises);
  const results = await Promise.allSettled(promises);
  results.forEach(result => console.log(result.status));
};

export default cacheImages;