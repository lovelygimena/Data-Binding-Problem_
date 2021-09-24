var assignment = new Vue({
  el: '#ass',
  data:{
    name1:'',
    name2:''
  },
  methods: {
    show: function(event) {
      alert('Form Submitted!');
    },
    down: function(event){
      this.name1=event.target.value;
    },
    enter:function(event){
      this.name2=event.target.value;
    },
    
  }
})
