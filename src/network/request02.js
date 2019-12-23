import axios from 'axios'
export default function request02 (option){
    return new Promise((resolve,reject) => {
        const instance = axios.create({
            baseURL:'http://106.54.54.237:8000/api/v1',
            timeout:5000
        })

        //请求拦截 
        instance.interceptors.request.use(config => {
            return config
        },err => {
            return err
        })

        //响应拦截 对返回信息做处理
        instance.interceptors.response.use(response => {
            return response.data
        },err => {
            if(err && err.response){
                switch (err.response.status){
                    case 400:
                        err.message = '请求错误'
                        break
                    
                    case 401:
                        err.message = '未授权的访问'
                        break
                }
            }
        })

        
        instance(option).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
    })
}