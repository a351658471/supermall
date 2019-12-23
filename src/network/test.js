ExistsTextFile(data2){
    api.ExistsTextFile(this,data,(e) =>{
        new Promise((resolve,reject) =>{
            if(e.success){
                resolve(e)
            }
        }).then((e) =>{
            if(!e.result){
                setTimeout(() =>{
                    resolve()
                },3000)
            }else{
                let url = this.$router.resolve({
                    path:'/Rpt/OnProgress'
                })
                window.open(url,href,'_blank')
            }
        }).then(() => {
            this.ExistsTextFile(data2)
        })
    })
}
