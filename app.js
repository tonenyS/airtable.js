var Airtable = require('airtable');
var base = new Airtable({ apiKey: 'keyc1UHWgEK9yNcL1' }).base('appU27vq4tYbLGhaF');
var project = [];
var projectid = [];
base('project_on_hand').select({
        sort: [
            { field: 'โครงการ', direction: 'asc' }
        ]
    }).eachPage(function page(records, fetchNextPage) {
        records.forEach(function (record) {
            project.push(record.get('โครงการ'));
            projectid.push(record.getId());
        });
        
        fetchNextPage();
    }, function done(error) {
    });
$(document).ready(function () {
    $('#tablePr').DataTable();
    base('PR').select({
      view: "ตรวจสอบ",
        sort: [
            { field: 'รหัส PR', direction: 'asc' }
        ]
    }).eachPage(function page(records, fetchNextPage) {
        records.forEach(function (record) {
           
            var $artistInfo = $('<tr>');
            $artistInfo.append($('<td>').text(record.get('รหัส PR')));
            $artistInfo.append($('<td>').text(searchProject(record)));
            $artistInfo.append($('<td>').text(record.get('รายละเอียด')));
            $artistInfo.append($('<td>').text(record.get('จัดส่ง ณ')));
            $artistInfo.append($('<td>').text(record.get('สถานะ PR')));
            $artistInfo.append($('<td>').text(record.get('ผู้ขออนุมัติจัดซื้อ')));

            var x = $('<button>').text('แก้ไข').click(function () {
                modify(record);
            });

            $artistInfo.append(x)
            $artistInfo.attr('data-record-id', record.getId());

            $('#tablePr').append($artistInfo);
        });
        
        fetchNextPage();
    }, function done(error) {
    });


  });


  var searchProject = function(record){
    for (let i = 0 ; i < project.length ; i++){
    //console.log(project[i]+"ในลูป")
        if(projectid[i]==record.get('โครงการ')){
          return project[i];
          break;
        }

    } 

}

var modify = function (record) {
    var date = new Date(record.get('วันเวลาที่จัดส่ง'));
    var currentDate = date.toISOString().substring(0,10);
    var currentTime = date.toTimeString().substring(0,8);
    document.getElementById("pr_id").value =record.get('รหัส PR');
    document.getElementById("pr_status").value =record.get('สถานะ PR');
    document.getElementById("address").value =record.get('จัดส่ง ณ');
    document.getElementById("input1").value =searchProject(record);
    document.getElementById("input2").value =record.get('วันที่เปิด PR');
    document.getElementById("input3").value =record.get('สถานที่จัดส่ง');
    document.getElementById("input4").value =record.get('ติดต่อคุณ');
    document.getElementById("input5").value =record.get('เบอร์โทรผู้รับของ');
    document.getElementById("input6").value = currentDate;
    document.getElementById("input34").value =currentTime;
    document.getElementById("input7").value =record.get('รายการที่ 1');
    document.getElementById("input8").value =record.get('จำนวน รายการที่ 1');
    document.getElementById("input9").value =record.get('หน่วย รายการที่ 1');

    if(record.get('รายการที่ 2')==undefined){




    }else if(record.get('รายการที่ 2')!=undefined){
        document.getElementById("input10").value =record.get('รายการที่ 2');
        document.getElementById("input11").value =record.get('จำนวน รายการที่ 2');
        document.getElementById("input12").value =record.get('หน่วย รายการที่ 2');
    
    }else if(record.get('รายการที่ 3')==undefined){
      


    }else if(record.get('รายการที่ 3')!=undefined){
        document.getElementById("input13").value =record.get('รายการที่ 3');
        document.getElementById("input14").value =record.get('จำนวน รายการที่ 3');
        document.getElementById("input15").value =record.get('หน่วย รายการที่ 3');

    }else if(record.get('รายการที่ 4')==undefined){

        
    }else if(record.get('รายการที่ 4')!=undefined){
        document.getElementById("input16").value =record.get('รายการที่ 4');
        document.getElementById("input17").value =record.get('จำนวน รายการที่ 4');
        document.getElementById("input18").value =record.get('หน่วย รายการที่ 4');

    }else if(record.get('รายการที่ 5')==undefined){

      
    }else if(record.get('รายการที่ 5')!=undefined){
        document.getElementById("input19").value =record.get('รายการที่ 5');
        document.getElementById("input20").value =record.get('จำนวน รายการที่ 5');
        document.getElementById("input21").value =record.get('หน่วย รายการที่ 5');

    }else if(record.get('รายการที่ 6')==undefined){



    }else if(record.get('รายการที่ 6')!=undefined){
        document.getElementById("input22").value =record.get('รายการที่ 6');
        document.getElementById("input23").value =record.get('จำนวน รายการที่ 6');
        document.getElementById("input24").value =record.get('หน่วย รายการที่ 6');

    }else if(record.get('รายการที่ 7')==undefined){


    }else if(record.get('รายการที่ 7')!=undefined){
        document.getElementById("input25").value =record.get('รายการที่ 7');
        document.getElementById("input26").value =record.get('จำนวน รายการที่ 7');
        document.getElementById("input27").value =record.get('หน่วย รายการที่ 7');

    }else if(record.get('รายการที่ 8')==undefined){


    }else if(record.get('รายการที่ 8')!=undefined){
        document.getElementById("input28").value =record.get('รายการที่ 8');
        document.getElementById("input29").value =record.get('จำนวน รายการที่ 8');
        document.getElementById("input30").value =record.get('หน่วย รายการที่ 8');
        
    }
    document.getElementById("input31").value = record.get('ผู้ขออนุมัติจัดซื้อ');
  //console.log(document.getElementById("input2").value+"เหนื่อยจิงๆ 1111");
    
   /* var x = $('<button>').text('แก้ไข').click(function () {
                modify(record);
            });*/


    y = record;
    $("#myDiv").modal('show');
    
    /*record.destroy(function(err) {
        if (err) {
           //console.log('Error destroying ', recordId, err);
         } else {
           //console.log('Destroyed ', record.getId());
             $('div[data-record-id="'+record.getId()+'"]').remove();
         }
     });
     */
};
var update = function () {      
  var datex = (document.getElementById("input6").value+"T"+document.getElementById("input34").value);
  base('PR').update([
        {
          "id": y.getId(),
          "fields": {
            "วันที่เปิด PR": document.getElementById("input2").value,
            "สถานที่จัดส่ง": document.getElementById("input3").value,
            "ติดต่อคุณ": document.getElementById("input4").value,
            "วันเวลาที่จัดส่ง": Date.parse(datex),
            "รายการที่ 1": document.getElementById("input7").value,
            "จำนวน รายการที่ 1": parseInt(document.getElementById("input8").value),
            "หน่วย รายการที่ 1": document.getElementById("input9").value,
            "รายการที่ 2": document.getElementById("input10").value,
            "จำนวน รายการที่ 2": parseInt(document.getElementById("input11").value),
            "หน่วย รายการที่ 2": document.getElementById("input12").value,
            "รายการที่ 3": document.getElementById("input13").value,
            "จำนวน รายการที่ 3": parseInt(document.getElementById("input14").value),
            "หน่วย รายการที่ 3": document.getElementById("input15").value,
            "รายการที่ 4": document.getElementById("input16").value,
            "จำนวน รายการที่ 4": parseInt(document.getElementById("input17").value),
            "หน่วย รายการที่ 4": document.getElementById("input18").value,
            "รายการที่ 5": document.getElementById("input19").value,
            "จำนวน รายการที่ 5": parseInt(document.getElementById("input20").value),
            "หน่วย รายการที่ 5": document.getElementById("input21").value,
            "รายการที่ 6": document.getElementById("input22").value,
            "จำนวน รายการที่ 6": parseInt(document.getElementById("input23").value),
            "หน่วย รายการที่ 6": document.getElementById("input24").value,
            "รายการที่ 7": document.getElementById("input25").value,
            "จำนวน รายการที่ 7": parseInt(document.getElementById("input26").value),
            "หน่วย รายการที่ 7": document.getElementById("input27").value,
            "รายการที่ 8": document.getElementById("input28").value,
            "จำนวน รายการที่ 8": parseInt(document.getElementById("input29").value),
            "หน่วย รายการที่ 8": document.getElementById("input30").value,
            "ผู้ขออนุมัติจัดซื้อ": document.getElementById("input31").value,
            "เบอร์โทรผู้รับของ": document.getElementById("input5").value
          }
        }
      ], function(err, records) {
        if (err) {
          console.error(err);
          window.alert("เกิดความผิดพลาดเวลาอัพเดทกรุณาอัพเดทใหม่")
          return;
        }
        records.forEach(function(record) {
        //console.log(record.get("วันเวลาที่จัดส่ง"));
        //console.log(document.getElementById("input3").value);
        //console.log(document.getElementById("input4").value);
          //console.log(document.getElementById("input4"));
          var delayInMilliseconds = 3000; //1 second
          window.alert("อัพเดทสำเร็จ")   
          setTimeout(function() {
                         
          javascript:location.reload();
          }, delayInMilliseconds);
        });
      });


      
}
// $(document).ready(function () {

//     // Attach Button click event listener 
//     $("#myBtn").click(function () {

//         // show Modal
//         $('#myModal').modal('show');
//     });
// });






/* var deleteArtist = function(record) {
     record.destroy(function(err) {
         if (err) {
           //console.log('Error destroying ', recordId, err);
         } else {
           //console.log('Destroyed ', record.getId());
             $('div[data-record-id="'+record.getId()+'"]').remove();
         }
     });
 };

var loadArtists = function () {
    $('#artists').empty();

    base('PR').select({
        sort: [
            { field: 'รหัส PR', direction: 'asc' }
        ]
    }).eachPage(function page(records, fetchNextPage) {
        records.forEach(function (record) {
          //console.log('Retrieved ', record.get('รหัส PR'));

            var $artistInfo = $('<div>');

            $artistInfo.append($('<h3>').text(record.get('รหัส PR')));
            $artistInfo.append($('<div>').text("โครงการ" & record.get('โครงการ')));
          



            var x = $('<button>').text('Delete').click(function () {
                deleteArtist(record);
            });
            $artistInfo.append(x)
            $artistInfo.attr('data-record-id', record.getId());

            $('#artists').append($artistInfo);
        });

        fetchNextPage();
    }, function done(error) {
      //console.log(error);
    });
};

 $('#create').click(function(){
     base('Artists').create({
         "Name": "Al Held",
         "Bio": "Al Held began his painting career by exhibiting Abstract Expressionist works in New York; he later turned to hard-edged geometric paintings that were ...",
         "Genre": [
             "American Abstract Expressionism",
             "Color Field"
         ],
         "On Display?": true
     }, function(err, record) {
         if (err) { console.log(err); return; }
         loadArtists();
     });
 });


 $('#create').click(function(){
     base('Artists').update({
         "รหัสโครงการ": "PR-2021-07-TR05-22",
         "Bio": "Al Held began his painting career by exhibiting Abstract Expressionist works in New York; he later turned to hard-edged geometric paintings that were ...",
         "Genre": [
             "American Abstract Expressionism",
             "Color Field"
         ],
         "On Display?": true
     }, function(err, record) {
         if (err) { console.log(err); return; }
         loadArtists();
     });
 });*/



//loadArtists();
