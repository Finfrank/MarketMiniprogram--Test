var data = {
      
      env: 'cloud1-0gyp62l90a77e65f',
      share_title: 'MARKET化大',
      share_img: '/images/poster.jpg',
      share_poster:'https://s2.ax1x.com/2019/11/20/Mhpqmt.png',
      kefu: {
            wx: 'BUCTTEST',
      },
      bgurl: '/images/1111.png',
      //校区
      campus: [{
                  name: '昌平校区',
                  id: 0
            },
            {
                  name: '东校区',
                  id: 1
            },

      ],
      //学院
      college: [{
                  name: '通用',
                  id: -1
            },
            {
                  name: '书籍',
                  id: 0
            },
            {
                  name: '日用品',
                  id: 1
            },
            {
                  name: '食品',
                  id: 2
            },
            {
                  name: '衣物',
                  id: 3
            },
            {
                  name: '工具',
                  id: 4
            },
            {
                  name: '化妆品',
                  id: 5
            },
            {
                  name: '其他',
                  id: 6
            },
      ],
}
function formTime(creatTime) {
      let date = new Date(creatTime),
            Y = date.getFullYear(),
            M = date.getMonth() + 1,
            D = date.getDate(),
            H = date.getHours(),
            m = date.getMinutes(),
            s = date.getSeconds();
      if (M < 10) {
            M = '0' + M;
      }
      if (D < 10) {
            D = '0' + D;
      }
      if (H < 10) {
            H = '0' + H;
      }
      if (m < 10) {
            m = '0' + m;
      }
      if (s < 10) {
            s = '0' + s;
      }
      return Y + '-' + M + '-' + D + ' ' + H + ':' + m + ':' + s;
}

function days() {
      let now = new Date();
      let year = now.getFullYear();
      let month = now.getMonth() + 1;
      let day = now.getDate();
      if (month < 10) {
            month = '0' + month;
      }
      if (day < 10) {
            day = '0' + day;
      }
      let date = year + "" + month + day;
      return date;
}
module.exports = {
      data: JSON.stringify(data),
      formTime: formTime,
      days: days
}