//WHAT WILL BE THE OUTPUT OF FOLLOWING CODE SNIPPET

var status = '😎';

setTimeout(() => {
  const status = '😍';

  const data = {
    status: '🥑',
    getStatus() {
      return this.status;
    },
  };

  console.log(data.getStatus());    //'🥑'
  console.log(data.getStatus.call(this));
}, 0);
