import router from './router'
import store from './store'

router.beforeEach(async(to,from,next) => {
  const {token,iframe,accountId,accountName,appId} = to.query
  if(to.path === '/sso/callback'){
    await store.dispatch('user/setUserLogin',{token})
    next('/')
  }else{
    next()
  }
})