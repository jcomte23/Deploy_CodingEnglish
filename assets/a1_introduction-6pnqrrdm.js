import"./main-jhtxHfwp.js";import"./translator-P4mY_9XB.js";const n=()=>{const a=[{letter:"a",pronuncitation:"eí",military:"apha"},{letter:"b",pronuncitation:"bí",military:"bravo"},{letter:"c",pronuncitation:"sí",military:"charlie"},,{letter:"d",pronuncitation:"dí",military:"delta"},{letter:"e",pronuncitation:"í",military:"echo"},{letter:"f",pronuncitation:"éf",military:"foxtrot"},{letter:"g",pronuncitation:"yí",military:"golf"},{letter:"h",pronuncitation:"éich",military:"hotel"},{letter:"i",pronuncitation:"ái",military:"india"},{letter:"j",pronuncitation:"yéi",military:"juliett"},{letter:"k",pronuncitation:"kéi",military:"kilo"},{letter:"l",pronuncitation:"él",military:"lima"},{letter:"m",pronuncitation:"em",military:"mike"},{letter:"n",pronuncitation:"en",military:"november"},{letter:"o",pronuncitation:"óu",military:"oscar"},{letter:"p",pronuncitation:"pí",military:"papa"},{letter:"q",pronuncitation:"kiú",military:"quebec"},{letter:"r",pronuncitation:"ar",military:"romeo"},{letter:"s",pronuncitation:"és",military:"sierra"},{letter:"t",pronuncitation:"tí",military:"tango"},{letter:"u",pronuncitation:"iú",military:"uniform"},{letter:"v",pronuncitation:"ví",military:"victor"},{letter:"w",pronuncitation:"dábliu",military:"whiskey"},{letter:"x",pronuncitation:"ex",military:"x-ray"},{letter:"y",pronuncitation:"uái",military:"yankee"},{letter:"z",pronuncitation:"zíd",military:"zulu"}],i=document.getElementById("tbody-alphabet");i.innerHTML="";let r=!0;a.forEach(t=>{r?(i.innerHTML+=`
            <tr class="bg-gray-100">
                <td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 uppercase">${t.letter}</td>
                <td class="text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    / ${t.pronuncitation} /
                </td>
                <td class="text-gray-900 font-light px-6 py-4 whitespace-nowrap capitalize">
                ${t.military}
                </td>
            </tr>`,r=!1):(i.innerHTML+=`
            <tr class="bg-white">
                <td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 uppercase">${t.letter}</td>
                <td class="text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    / ${t.pronuncitation} /
                </td>
                <td class="text-gray-900 font-light px-6 py-4 whitespace-nowrap capitalize">
                ${t.military}
                </td>
            </tr>`,r=!0)})};n();
