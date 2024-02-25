import"./main-SguRgQrk.js";const i=()=>{const r=[{number:1,pronunciation:"uán",writtenNumber:"one"},{number:2,pronunciation:"tu",writtenNumber:"two"},{number:3,pronunciation:"tri",writtenNumber:"three"},{number:4,pronunciation:"for",writtenNumber:"four"},{number:5,pronunciation:"fáiv",writtenNumber:"five"},{number:6,pronunciation:"siks",writtenNumber:"six"},{number:7,pronunciation:"séven",writtenNumber:"seven"},{number:8,pronunciation:"éit",writtenNumber:"eight"},{number:9,pronunciation:"náin",writtenNumber:"nine"},{number:10,pronunciation:"tén",writtenNumber:"ten"},{number:11,pronunciation:"iléven",writtenNumber:"eleven"},{number:12,pronunciation:"tuelf",writtenNumber:"twelve"},{number:13,pronunciation:"tertín",writtenNumber:"thirteen"},{number:14,pronunciation:"fortín",writtenNumber:"fourteen"},{number:15,pronunciation:"fiftín",writtenNumber:"fifteen"},{number:16,pronunciation:"sikstín",writtenNumber:"sixteen"},{number:17,pronunciation:"seventín",writtenNumber:"seventeen"},{number:18,pronunciation:"eightín",writtenNumber:"eighteen"},{number:19,pronunciation:"naintín",writtenNumber:"nineteen"},{number:20,pronunciation:"tueni",writtenNumber:"twenty"},{number:21,pronunciation:"tueni-uán",writtenNumber:"twenty-one"},{number:22,pronunciation:"tueni-tu",writtenNumber:"twenty-two"},{number:23,pronunciation:"tueni-tri",writtenNumber:"twenty-three"},{number:24,pronunciation:"tueni-for",writtenNumber:"twenty-four"},{number:25,pronunciation:"tueni-fáiv",writtenNumber:"twenty-five"},{number:30,pronunciation:"theri",writtenNumber:"thirty"},{number:40,pronunciation:"fóri",writtenNumber:"forty"},{number:50,pronunciation:"fífti",writtenNumber:"fifty"},{number:60,pronunciation:"síksti",writtenNumber:"sixty"},{number:70,pronunciation:"séventi",writtenNumber:"seventy"},{number:80,pronunciation:"éiri",writtenNumber:"eighty"},{number:90,pronunciation:"náiri",writtenNumber:"ninety"},{number:100,pronunciation:"uán jondred",writtenNumber:"one hundred"},{number:1e3,pronunciation:"uán dousand",writtenNumber:"one thousand"},{number:1e4,pronunciation:"ten dousand",writtenNumber:"ten thousand"},{number:1e5,pronunciation:"uán jondred dousand",writtenNumber:"one hundred thousand"},{number:1e6,pronunciation:"uán milion",writtenNumber:"one million"}],t=document.getElementById("tbody-numbers");t.innerHTML="";let e=!0;r.forEach(n=>{e?(t.innerHTML+=`
            <tr class="bg-gray-100">
                <td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 uppercase">${n.number}</td>
                <td class="text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    / ${n.pronunciation} /
                </td>
                <td class="text-gray-900 font-light px-6 py-4 whitespace-nowrap capitalize">
                ${n.writtenNumber}
                </td>
            </tr>`,e=!1):(t.innerHTML+=`
            <tr class="bg-white">
                <td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 uppercase">${n.number}</td>
                <td class="text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    / ${n.pronunciation} /
                </td>
                <td class="text-gray-900 font-light px-6 py-4 whitespace-nowrap capitalize">
                ${n.writtenNumber}
                </td>
            </tr>`,e=!0)})};i();
