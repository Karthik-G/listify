var postsData = [
  {
    title: 'Job 1',
    url: 'http://www.glassdoor.com/job-listing/sales-development-representative-JV_IC1147401_KO0,32_IE555763.htm?jl=1217702635&paoIdKey=MA=='
  }, 
  {
    title: 'Review 1',
    url: 'http://www.glassdoor.com/Reviews/Employee-Review-Target-RVW3740217.htm'
  }, 
  {
    title: 'Interview 1',
    url: 'http://www.glassdoor.com/Interview/Target-Executive-Team-Leader-Interview-Questions-EI_IE194.0,6_KO7,28.htm#empReview_4315089'
  }
];
Template.postsList.helpers({
  posts: postsData});
