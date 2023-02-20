/**
 * cacheImages takes in an array of images
 * to cache prior to using them.
 */
// async function cacheImages(srcArray: Array<string>) {
//   const promises = srcArray.map((src: string) => {
//     return new Promise((resolve, reject) => {
//       const img = new Image();

//       img.src = src;
//       // on img load, resolve promise.
//       img.onload = resolve(src);
//       // on error, reject promise.
//       img.onerror = reject();
//     });
//   });
//   await Promise.all(promises);
//   const results = await Promise.allSettled(promises);
//   results.forEach(result => console.log(result.status));
// };
function cacheImages({ images }: { images: Array<string>; }): Promise<Array<unknown>> {
  return Promise.all(
    images.map((image: string) => {
      return new Promise((resolve, reject) => {
        const img: HTMLImageElement = new Image();
        img.src = image;
        if (img.onload) console.log('onload'); resolve(image);
        if (img.onerror) console.log('onerror'); reject();
      });
    })
  );
}

export default cacheImages;

