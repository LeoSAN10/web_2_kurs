function showStudent(){
		var table = document.createElement("table");
		table.id = "table";
		var tbody = document.createElement("tbody");
		tbody.id = "table-body"; 
		table.appendChild(tbody);
		document.body.prepend(table);

		class Student {
	  		constructor(name, surname, age, mark) {
	    	this.name = name;
	    	this.surname=surname;
	    	this.age=age;
	    	this.mark=mark;
	    	}

	    	addToTable(id){
	    		var tr = document.createElement("tr");
				var td_name = document.createElement("td");
				var td_surname = document.createElement("td");
				var td_age = document.createElement("td");
				var td_mark = document.createElement("td");
				td_mark.className = "mark";
				td_name.innerHTML = this.name;
				td_surname.innerHTML = this.surname;
				td_age.innerHTML = this.age;
				td_mark.innerHTML = this.mark;
				tr.appendChild(td_name);
				tr.appendChild(td_surname);
				tr.appendChild(td_age);
				tr.appendChild(td_mark);
				document.getElementById(id).appendChild(tr);
	    	}
	  	}
	  	var student1 = new Student("Gleb", "Kron", 19, 4);
	  	var student2 = new Student("Arthur", "Shmidt", 18, 7.5);
	  	var student3 = new Student("Aleksey", "Lawson", 20, 9.8);
	  	var student4 = new Student("Egor", "Terry", 21, 5);
	  	var student5 = new Student("Arthem", "Kirilov", 20, 5.4);

	  	var arr = [];
	  	arr.push(student1, student2, student3, student4, student5);
	  	for (var i = 0; i < arr.length; i++) {
	  		arr[i].addToTable('table-body');
	  	}
  	}

  	  	function getAverage() {
  		var marks = document.getElementsByClassName('mark');
	  	var sum=0;
	  	for(var i=0; i<marks.length;i++){
	  		sum+= parseInt(marks[i].innerHTML, 12);
	  	}
	  	var averageMark= sum / marks.length;
	  	document.getElementById('average').innerHTML = "Average mark: " + averageMark;
  	}