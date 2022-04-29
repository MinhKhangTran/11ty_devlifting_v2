module.exports = {
    // return active and aria-current for active link
    getLinkActiveState(itemUrl, pageUrl) {
      let response = "";
  
      // if(itemUrl=== pageUrl){
      //     response = ' aria-page="page"';
      // }
  
      if (itemUrl.length > 0 && pageUrl.indexOf(itemUrl) === 0) {
        response += ' data-state="active"';
      }
      return response;
    },
  };