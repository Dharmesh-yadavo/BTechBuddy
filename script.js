
function mainSubmitButton(){
  const subject = document.getElementById('Subject').value
  const option = document.getElementById('Option').value
let pdfLinks = [];

  switch (subject) {

// Applied Physics 1
    case 'Applied Physics 1':
    switch (option) {

      case 'Notes':
        pdfLinks.push(`<a href="https://drive.google.com/file/d/1rKM1J6E9y7FN_aIv3ebCkUQ0K_Sa1Vgh/view?usp=sharing" target="_blank">Unit-1 and Unit-2 Notes</a>`);
        pdfLinks.push(`<a href="https://drive.google.com/file/d/1BnuaKDxkcfKI_HQqZVYnhfvKpwHKu2Jr/view?usp=sharing" target="_blank">Thermodynamics Notes </a>`);
        // pdfLinks.push(`<a href="https://www.awwwards.com/websites/illustration/" target="_blank">Download Notes</a>`);
        break;
      case 'Question Papers':
        pdfLinks.push(`<a href="https://drive.google.com/file/d/1c2d_R4H5JJQN0kMbx83A4IL5v5mMw50r/view?usp=sharing">First Semester PYQs</a>`);
        break;
      case 'Akash':
        pdfLinks.push(`<a href="https://drive.google.com/file/d/1JVcTOHXbysEBhot5zzlJWFQEVcZJZ8pA/view?usp=sharing" target="_blank">Physics Akash</a>`);
        break;
      case 'Practical Files':
        pdfLinks.push(`<a href="https://drive.google.com/file/d/1dY2Ab5AgHScE65nhTT12YAONgkzs_2Lo/view?usp=sharing" target="_blank">Lab Manuals</a>`);
        pdfLinks.push(`<a href="https://drive.google.com/file/d/1HUIjnnnzXhrGQn_wCSiCiC4u1pE86C9P/view?usp=sharing" target="_blank">Practical File 1</a>`);
        pdfLinks.push(`<a href="https://drive.google.com/file/d/1WPlMpipaWONmjSHGHGvJMMG-EPIiCTWC/view?usp=sharing" target="_blank">Practical File 2</a>`);
        pdfLinks.push(`<a href="https://drive.google.com/file/d/1RPsnU2hsa-eblNYvn_foz4wj_6c1Rh8N/view?usp=sharing" target="_blank">Practical File 3</a>`);
        pdfLinks.push(`<a href="https://drive.google.com/file/d/1wFGns1YQ6rFZ4PsMBpNIKb-pWX0vcK-v/view?usp=sharing" target="_blank">Practical File 4</a>`);
        break;
      case 'Ebooks':
        pdfLinks.push(`<a href="https://drive.google.com/file/d/1IfuYGOCpMNlunQop9gXOVntRj9lNgltR/view?usp=sharing" target="_blank">Thermodynamics By Devraj Singh</a>`);
        pdfLinks.push(`<a href="https://drive.google.com/file/d/1-Qngw7A4FeU3wC8vNZSn96QsclThA-3P/view?usp=sharing" target="_blank">Waves and Oscillations By Devraj Singh</a>`);
        pdfLinks.push(`<a href="https://drive.google.com/file/d/1RH0lY5Cztocuz7aFZajGoszrMA-UY-r3/view?usp=sharing" target="_blank">Introduction to Electromagnetic Theory By Devraj Singh</a>`);
        break;
      default:
      console.log("Invalid Option")
        break;
    }
    break;

// Applied Chemistry
    case 'Applied Chemistry':
    switch (option) {

      case 'Notes':
      pdfLinks.push(`<a href="https://drive.google.com/file/d/1Sq_6S05vuTc5I5dg-bQ6FHAaxPqx2g5I/view?usp=sharing" target="_blank">Fuel Notes </a>`);
      // pdfLinks.push(`<a href="https://drive.google.com/file/d/11h9eETixYaepAbmrO1-qG3H1n9wCv7pd/view?usp=sharing" target="_blank">Fuel Notes 2</a>`);
      // pdfLinks.push(`<a href="https://drive.google.com/file/d/1ka4lxvsFbsQ-G47bq297xcDiM25-Trg4/view?usp=sharing" target="_blank">Fuel Notes 3</a>`);
      // pdfLinks.push(`<a href="https://drive.google.com/file/d/18CuFXZJuwjbdFdK4tK8zMOwBsDNAeawo/view?usp=sharing" target="_blank">Fuel Notes 4</a>`);
        break;
      case 'Question Papers':
      pdfLinks.push(`<a href="https://drive.google.com/file/d/1q7yiYfO7bTB2LL-WdGeu4dzJlx9iNORG/view?usp=sharing" target="_blank">First Semester PYQs</a>`);
      pdfLinks.push(`<a href="https://docs.google.com/document/d/1fXTOks__QMoLsH4y5mMfOS81z4nGyj0y/edit?usp=sharing&ouid=110539430903575462073&rtpof=true&sd=true" target="_blank">Most Repeated Questions</a>`);
        break;
        case 'Akash':
      pdfLinks.push(`<a href="https://drive.google.com/file/d/1-TbfqzKkSWxWefUT34BvLCLf91lXsSza/view?usp=sharing" target="_blank">Chaemistry Akash</a>`);
        break;
      case 'Practical Files':
      pdfLinks.push(`<a href="https://drive.google.com/file/d/1f4oLnRgGlGqQ4nP2M56VfgKWLgO0jziy/view?usp=sharing" target="_blank">Practical File 1</a>`);
      pdfLinks.push(`<a href="https://drive.google.com/file/d/1uCPplNJrYGKfKqjvJra88-zn432ZVkm9/view?usp=sharing" target="_blank">Practical File 2</a>`);
      pdfLinks.push(`<a href="https://drive.google.com/file/d/105nGUqzN17OxwM8Rj_5BAWI7GkzHj9rE/view?usp=sharing" target="_blank">Practical File 3</a>`);
      pdfLinks.push(`<a href="https://drive.google.com/file/d/1pR4k8ydNuHtQPKQlMF-Oi5bUqp9ZTgVy/view?usp=sharing" target="_blank">Practical File 4</a>`);
      pdfLinks.push(`<a href="https://drive.google.com/file/d/1oaqRFyZP2SYCmT9mymLoa2fSsPB-MB8C/view?usp=sharing" target="_blank">Practical File 5</a>`);
        break;
      case 'Ebooks':
      pdfLinks.push(`<a href="https://drive.google.com/file/d/1D1RKh-P1LN40VTExTHqmWg7QI4xzp_eY/view?usp=sharing" target="_blank">Fuel Ebook</a>`);
      pdfLinks.push(`<a href="https://drive.google.com/file/d/1f7_S6dyTqX3s_0ZPJyC33qlnlNEil68x/view?usp=sharing" target="_blank">Engineering Chemistry by Shikha Agarwal</a>`);
      pdfLinks.push(`<a href="https://drive.google.com/file/d/1alffccl0N3liorhrvMd8982pW_KaZYAO/view?usp=sharing" target="_blank">Engineering Chemistry</a>`);
        break;
      default:
      console.log("Invalid Option")
        break;
    }
    break;

// Applied Mathematics 1
    case 'Applied Mathematics 1':
    switch (option) {

      case 'Notes':
      pdfLinks.push(`<a href="https://drive.google.com/file/d/1ej3-yCaoTmZqrC5wYrGTXWqismTJBBao/view?usp=sharing" target="_blank">Full Semester 1 notes</a>`);
      // pdfLinks.push(`<a href="" target="_blank"></a>`);
      // pdfLinks.push(`<a href="" target="_blank">Download Notes</a>`);
        break;
      case 'Question Papers':
      pdfLinks.push(`<a href="https://drive.google.com/file/d/1og9SoAw20uP_DXUbA51l3Ffdw8x1YNJ_/view?usp=sharing" target="_blank">First Semester PYQs</a>`);
        break;
      case 'Akash':
      pdfLinks.push(`<a href="https://drive.google.com/file/d/1-YR2u8sk-xW3S8zmS2-hs6rNZP5iJb1U/view?usp=sharing" target="_blank">Math Akash</a>`);
        break;
      case 'Practical Files':
      pdfLinks.push(`<a href="" target="_blank">Coming Soon</a>`);
      // pdfLinks.push(`<a href="" target="_blank">Download Notes</a>`);
        break;
      case 'Ebooks':
      pdfLinks.push(`<a href="https://drive.google.com/file/d/13Ph3O55rnkRZpPhUQhBDTVZxglL1TB6l/view?usp=sharing" target="_blank">Engineering Mathematics by VP Mishra</a>`);
      pdfLinks.push(`<a href="https://drive.google.com/file/d/1rpYbN043rbB9psgAF8_ijXchMetWrjxn/view?usp=sharing" target="_blank">Engineering Mathemabtics by BS Grewal</a>`);
      pdfLinks.push(`<a href="https://drive.google.com/file/d/16x2kxVh9QoTCsDi3mj7F9Z_2aJKRS-N-/view?usp=sharing" target="_blank">Advanced Engineering Mathematics by Erwin Kreyszig</a>`);
      pdfLinks.push(`<a href="https://drive.google.com/file/d/1ExQ4wfX2Ey8osCOnYIi4xLmRhzUuEAER/view?usp=sharing" target="_blank">Advanced EngineeringMathematics by Rajendra K Jain</a>`);
        break;
      default:
      console.log("Invalid Option")
        break;
    }
    break;

// Manufacturing Processes
    case 'Manufacturing Processes':
    switch (option) {

      case 'Notes':
      pdfLinks.push(`<a href="https://drive.google.com/file/d/1_qmzntbKvwOHvZ_SrJ-ZanwKt1CP5S8H/view?usp=sharing" target="_blank">Unit 1 Notes</a>`);
      pdfLinks.push(`<a href="https://drive.google.com/file/d/1YYTl6D12lWQ1abLvtqpqGtkb3TIe9kfH/view?usp=sharing" target="_blank">Complete Manufacturing Notes</a>`);
      pdfLinks.push(`<a href="https://drive.google.com/file/d/1hL0HCxT28XJxLXLsNkuGU18LJyS5OQKr/view?usp=sharing" target="_blank">Unit 1 ppt </a>`);
      pdfLinks.push(`<a href="https://drive.google.com/file/d/1XpJt3kmWFpinaP1ojOmf305GNCZ8iPsk/view?usp=sharing" target="_blank">Unit 2 ppt</a>`);
      pdfLinks.push(`<a href="https://drive.google.com/file/d/15-UBSSVA76KpHt7YZ7CcM9bhD3vSkeYO/view?usp=sharing" target="_blank">Unit 3 ppt</a>`);
      pdfLinks.push(`<a href="https://drive.google.com/file/d/1vd_baQXMqtqTEo_GVFoxqtQoFj3taMYY/view?usp=sharing" target="_blank">Unit 4 ppt</a>`);

        break;
      case 'Question Papers':
      pdfLinks.push(`<a href="https://drive.google.com/file/d/19IRb_SUGowf8S-w_SQDsn9EK22Vn_Bas/view?usp=sharing" target="_blank">Must Do Questions</a>`);
      pdfLinks.push(`<a href="https://docs.google.com/document/d/1-SU1OYIs4VjQ7vDqEVtNs1Z63r88M_Pp/edit?usp=sharing&ouid=110539430903575462073&rtpof=true&sd=true" target="_blank">Most Repeated Questions</a>`);
      pdfLinks.push(`<a href="https://drive.google.com/file/d/1C8qmwWV4O3zGP6mEhwbq2eKP9xELzr56/view?usp=sharing" target="_blank">First Semester PYQs</a>`);
        break;
      case 'Akash':
      pdfLinks.push(`<a href="https://drive.google.com/file/d/1ipa_zKSK71JJ2b7jf_qhxM3oBn4i5VpY/view?usp=sharing" target="_blank">Manufacturing Processes Akash</a>`);
        break;
      case 'Practical Files':
      pdfLinks.push(`<a href="" target="_blank">Coming Soon</a>`);
      // pdfLinks.push(`<a href="" target="_blank">Download Notes</a>`);
        break;
      case 'Ebooks':
      pdfLinks.push(`<a href="https://drive.google.com/file/d/1W3v6pjZiC5Z50xXizL69HIKtFV1xiW3t/view?usp=sharing" target="_blank">Manufacturing Processes by PN Rao</a>`);
        break;
      default:
      console.log("Invalid Option")
        break;
    }
    break;

// Electrical Science
    case 'Electrical Science':
    switch (option) {

      case 'Notes':
      pdfLinks.push(`<a href="https://drive.google.com/file/d/1l-4xNMthIo8qB6lqct_Bf6mT8YCB2cjn/view?usp=sharing" target="_blank">1st Year Notes</a>`);
      // pdfLinks.push(`<a href="https://drive.google.com/file/d/1HNZXAeeCxS_wx3wIox_WfzSeDG8nZzh3/view?usp=sharing" target="_blank">1st and 2nd Semester Notes</a>`);
      pdfLinks.push(`<a href="https://drive.google.com/file/d/1A5eh_cp5eVMMw0tT5XNQ1Z4LbRvEfJ-7/view?usp=sharing" target="_blank">DC Circuit Notes</a>`);
      // pdfLinks.push(`<a href="https://drive.google.com/file/d/1zn3Rj-ygxK09iIHwhIDbI8WOMi1DvTUO/view?usp=sharing" target="_blank">DC Circuit Notes 2</a>`);
        break;
      case 'Question Papers':
      pdfLinks.push(`<a href="https://drive.google.com/file/d/16awPRpsy2iWUbsmSLbfQa6yLnldqJj2w/view?usp=sharing" target="_blank">First Semester PYQs</a>`);
        break;
      case 'Akash':
      pdfLinks.push(`<a href="https://drive.google.com/file/d/1BTXDZCvcluPUtotEzVb7zqv9Bl9VTIGl/view?usp=sharing" target="_blank">Electrical Science Akash</a>`);
        break;
      case 'Practical Files':
      pdfLinks.push(`<a href="https://drive.google.com/file/d/10jmDe4JEBE-fV_achjPq2QCaYDGcSYp5/view?usp=sharing" target="_blank">Practical File 1</a>`);
        break;
      case 'Ebooks':
      pdfLinks.push(`<a href="" target="_blank">Coming Soon</a>`);
      // pdfLinks.push(`<a href="" target="_blank">Download Notes</a>`);
        break;
      default:
      console.log("Invalid Option")
        break;
    }
    break;

//Default case
    default:
      break;
  }


  // Printing the Answer
 document.getElementById('sol').hidden = false ;
 document.getElementById('optionBox').innerText = `${option}`;

 const pdfContainer = document.getElementById('pdfContainer');
  pdfContainer.innerHTML = ''; // Clear previous links
  pdfLinks.forEach(link => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = link;
    pdfContainer.appendChild(card);
  });



}


// buy me a coffee
function buycoffee() {
  // var linkUrl = "https://github.com/Dharmesh-yadavo/notewave/blob/main/buymecoffeeQR.png?raw=true";
  var linkUrl = "buymecoffeeQR.png";

  window.open(linkUrl, '_blank');
}

