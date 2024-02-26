///https://script.googleusercontent.com/a/macros/skcet.ac.in/echo?user_content_key=3YDRduvRoakAxHxJcXSsBONnAiazRs455i_Sb3L3IQw_r8Cjgw1U6D6zvoizU_CCsKNITkbQ30ZZB8_l7FGSy2k-XOMvRVjKOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKBgzsmLdOzbHC_8qITVF7fXh8JJZFsljkgcQM4UwS1rQoWPgAlqiImmX9mAQAnR18Agg4_lKswmxUXjaMbz_6Sr52kTLwOFPPziLoVe-K7gHuF6hOpKyfPsT7xlDcEp37g&lib=M3AmioqxckIU5ScEcYdxzk21LwkdVeYUP

async function logMovies() {
  const response = await fetch("https://script.googleusercontent.com/a/macros/skcet.ac.in/echo?user_content_key=3YDRduvRoakAxHxJcXSsBONnAiazRs455i_Sb3L3IQw_r8Cjgw1U6D6zvoizU_CCsKNITkbQ30ZZB8_l7FGSy2k-XOMvRVjKOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKBgzsmLdOzbHC_8qITVF7fXh8JJZFsljkgcQM4UwS1rQoWPgAlqiImmX9mAQAnR18Agg4_lKswmxUXjaMbz_6Sr52kTLwOFPPziLoVe-K7gHuF6hOpKyfPsT7xlDcEp37g&lib=M3AmioqxckIU5ScEcYdxzk21LwkdVeYUP");
  const movies = await response.json();



  var smscount=0,emailcount=0,callcount=0;
  for(var i=1; i<movies.length; i++){
      if(movies[i].Type =='SMS'){
          smscount++;
      }
  }
  for(var i=1; i<movies.length; i++){
      if(movies[i].Type =='Email'){
          emailcount++;
      }

  }
  for(var i=1; i<movies.length; i++){
      if(movies[i].Type =='Call'){
          callcount++;
      }
  
}
console.log(smscount);
console.log(emailcount);
console.log(callcount);
}
logMovies();