// async function logMovies() {
//   const response = await fetch("https://script.googleusercontent.com/a/macros/skcet.ac.in/echo?user_content_key=8eM6PXyA9xYwExTzy_PWtY8Y1Nn2qev4Mt7MxTiRx7S-pvPOP0KFs3LbWaMU7kAjWi6PsMbwR_dG-YJG1Ub1o6Y_6rH8JkIoOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKBgzsmLdOzbHC_8qITVF7fXh0lmODcuY_351REUnA30CkrkRS5xPZqjXYmgeuzT9DzecXcl2eGAuGq4QxcDkQFg6kKKc09gIESmZoWEp_G88-Fsb5HNGiRoffGF01rEMMU&lib=MA7RKOWnClMjkGpWSG2nZzG1LwkdVeYUP");
//   const movies = await response.json()

//   console.log(movies);
// }


async function logMovies() {
  const response = await fetch("https://script.googleusercontent.com/a/macros/skcet.ac.in/echo?user_content_key=11wcJO5SWyA3KJnWj7V-8dXWw8GtKPC3sqhhKzYbkpt2fzQd61xTuGMmF4Vt3vEqTnym-I1x9BBHl736aqCUEQc_hJAub713OJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKBgzsmLdOzbHC_8qITVF7fXh0lmODcuY_351REUnA30CkrkRS5xPZqjXYmgeuzT9DzecXcl2eGAuGq4QxcDkQFg6kKKc09gIESmZoWEp_G88-Fsb5HNGiRoffGF01rEMMU&lib=MA7RKOWnClMjkGpWSG2nZzG1LwkdVeYUP");
  const movies = await response.json();
  console.log(movies);
}
logMovies();



// async function logMovies() {
//   const response = await fetch("https://script.googleusercontent.com/a/macros/skcet.ac.in/echo?user_content_key=VHu3PVfU-ZvDtzgAY9cex_rDJY9plW0Bp20nXpQKSi2nmbDuQlBggHKHecqyoaWUQEald_9fUuedua59zIp9LhP4OjKFV9MrOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKBgzsmLdOzbHC_8qITVF7fXh8JJZFsljkgcQM4UwS1rQoWPgAlqiImmX9mAQAnR18Agg4_lKswmxUXjaMbz_6Sr52kTLwOFPPziLoVe-K7gHuF6hOpKyfPsT7xlDcEp37g&lib=M3AmioqxckIU5ScEcYdxzk21LwkdVeYUP");
//   const movies = response;
//   console.log(movies);
//   return movies;
// }