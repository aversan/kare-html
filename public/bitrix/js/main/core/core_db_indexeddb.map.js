{"version":3,"file":"core_db_indexeddb.min.js","sources":["core_db_indexeddb.js"],"names":["window","BX","indexedDB","params","mozIndexedDB","webkitIndexedDB","msIndexedDB","IDBTransaction","webkitIDBTransaction","msIDBTransaction","IDBKeyRange","webkitIDBKeyRange","msIDBKeyRange","request","open","name","parseInt","version","onsuccess","event","callback","this","result","onupgradeneeded","oScheme","hDBHandle","target","ob","oStore","tx","schemeLength","length","i","objectStoreNames","contains","createObjectStore","keyPath","autoIncrement","indexes","j","createIndex","unique","bFound","deleteObjectStore","checkDbObject","dbObject","getObjectStore","storeName","mode","transaction","onerror","objectStore","err","addValue","value","key","obCallback","add","e","error","updateValue","store","put","deleteValue","deleteValueByIndex","indexName","getKeyRequest","index","getKey","deleteRequest","getValue","get","getValueByIndex","openCursor","obKeyRange","keyRange","lower","upper","bound","lowerOpen","upperOpen","lowerBound","upperBound","cursor","count","deleteDatabase","databaseName"],"mappings":"CACA,SAAWA,GAEV,GAAIA,EAAOC,GAAGC,UAAW,MAEzB,IAAID,GAAKD,EAAOC,EAUhBA,GAAGC,UAAY,SAAUC,GAExB,GAAID,GAAYF,EAAOE,WAAaF,EAAOI,cAAgBJ,EAAOK,iBAAmBL,EAAOM,WAC5FN,GAAOO,eAAiBP,EAAOO,gBAAkBP,EAAOQ,sBAAwBR,EAAOS,gBACvFT,GAAOU,YAAcV,EAAOU,aAAeV,EAAOW,mBAAqBX,EAAOY,aAE9E,UACQV,IAAa,mBACVF,GAAOO,gBAAkB,mBACzBP,GAAOU,aAAe,YAEjC,CACC,GAAIG,GAAUX,EAAUY,KAAKX,EAAOY,KAAMC,SAASb,EAAOc,SAE1DJ,GAAQK,UAAY,SAASC,GAC5B,SAAWhB,GAAOiB,UAAY,WAC9B,CACCjB,EAAOiB,SAASC,KAAKC,SAIvBT,GAAQU,gBAAkB,SAAUJ,GAInC,SAAWhB,GAAOqB,SAAW,YAC7B,CACa,GAAIC,GAAYN,EAAMO,OAAOJ,MACzC,IAAIK,GAAK,IACT,IAAIC,GAAS,IACb,IAAIC,GAAK,IACT,IAAIC,GAAe3B,EAAOqB,QAAQO,MAElC,KAAK,GAAIC,GAAI,EAAGA,EAAIF,EAAcE,IAClC,CACCL,EAAKxB,EAAOqB,QAAQQ,EAEpB,UACQL,IAAM,WACTF,EAAUQ,iBAAiBC,SAASP,EAAGZ,MAE5C,CACCa,EAASH,EAAUU,kBAClBR,EAAGZ,MAEFqB,cAAkBT,GAAGS,SAAW,aAAeT,EAAGS,QAClDC,oBAAwBV,GAAGU,eAAiB,eAAiBV,EAAGU,eAIlE,UAAWV,GAAGW,SAAW,YACzB,CACC,IAAK,GAAIC,GAAI,EAAGA,EAAIZ,EAAGW,QAAQP,OAAQQ,IACvC,CACCX,EAAOY,YAAYb,EAAGW,QAAQC,GAAGxB,KAAMY,EAAGW,QAAQC,GAAGH,SAAWK,SAAUd,EAAGW,QAAQC,GAAGE,YAM5F,GAAIC,GAAS,IACbX,QAASN,EAAUQ,iBAAiBF,MAEpC,KAAK,GAAIC,GAAI,EAAGA,EAAID,OAAQC,IAC5B,CACCU,EAAS,KAET,KAAK,GAAIH,GAAI,EAAGA,EAAIT,EAAcS,IAClC,CACCZ,EAAKxB,EAAOqB,QAAQe,EACpB,IAAIZ,EAAGZ,MAAQU,EAAUQ,iBAAiBD,GAC1C,CACCU,EAAS,IACT,WAIF,IAAKA,EACL,CACCjB,EAAUkB,kBAAkBlB,EAAUQ,iBAAiBD,SAQ7D/B,GAAGC,UAAU0C,cAAgB,SAAUC,GAEtC,aAAeA,IAAY,SAG5B5C,GAAGC,UAAU4C,eAAiB,SAAUD,EAAUE,EAAWC,GAE5D,IAAK/C,EAAGC,UAAU0C,cAAcC,GAChC,CACC,OAGD,IAEC,GAAIhB,GAAKgB,EAASI,YAAYF,EAAWC,EACzCnB,GAAGX,UAAY,YACfW,GAAGqB,QAAU,YACb,OAAOrB,GAAGsB,YAAYJ,GAEvB,MAAMK,GAEL,MAAO,QAITnD,GAAGC,UAAUmD,SAAW,SAAUR,EAAUE,EAAWO,EAAOC,EAAKC,GAElE,GAAI3C,GAAU,IAEd,KAECA,EAAUZ,EAAGC,UAAU4C,eAAeD,EAAUE,EAAW,aAAaU,IAAIH,EAAOC,GAEpF,MAAMG,IAIN7C,EAAQqC,QAAU,SAAS/B,GAE1B,SAAWqC,GAAWG,OAAS,WAC/B,CACCH,EAAWG,MAAMxC,IAInBN,GAAQK,UAAY,SAASC,GAE5B,SAAWqC,GAAWpC,UAAY,WAClC,CACCoC,EAAWpC,SAASD,KAKvBlB,GAAGC,UAAU0D,YAAc,SAAUf,EAAUE,EAAWO,EAAOC,EAAKC,GAErE,GAAIK,GAAQ5D,EAAGC,UAAU4C,eAAeD,EAAUE,EAAW,YAC7D,IAAIlC,GAAU,IAEd,KAEC,GAAI0C,EACJ,CACC1C,EAAUgD,EAAMC,IAAIR,EAAOC,OAG5B,CACC1C,EAAUgD,EAAMC,IAAIR,IAGtB,MAAOI,IAIP7C,EAAQqC,QAAU,SAAS/B,GAE1B,SACQqC,IAAc,mBACXA,GAAWG,OAAS,WAE/B,CACCH,EAAWG,MAAMxC,IAInBN,GAAQK,UAAY,SAASC,GAE5B,SACQqC,IAAc,mBACXA,GAAWpC,UAAY,WAElC,CACCoC,EAAWpC,SAASD,KAKvBlB,GAAGC,UAAU6D,YAAc,SAAUlB,EAAUE,EAAWQ,EAAKC,GAE9D,GAAI3C,GAAUZ,EAAGC,UAAU4C,eAAeD,EAAUE,EAAW,aAAa,UAAUQ,EAEtF1C,GAAQqC,QAAU,SAAS/B,GAE1B,SACQqC,IAAc,mBACXA,GAAWG,OAAS,WAE/B,CACCH,EAAWG,MAAMxC,IAInBN,GAAQK,UAAY,SAASC,GAE5B,SACQqC,IAAc,mBACXA,GAAWpC,UAAY,WAElC,CACCoC,EAAWpC,SAASD,KAKvBlB,GAAGC,UAAU8D,mBAAqB,SAAUnB,EAAUE,EAAWkB,EAAWV,EAAKC,GAEhF,GAAIU,GAAgB,IAEpB,KAECA,EAAgBjE,EAAGC,UAAU4C,eAAeD,EAAUE,EAAW,aAAaoB,MAAMF,GAAWG,OAAOb,GAEvG,MAAMG,IAINQ,EAAchD,UAAY,SAASC,GAElC,GAAIkD,GAAgB,IAEpB,KAECA,EAAgBpE,EAAGC,UAAU4C,eAAeD,EAAUE,EAAW,aAAa,UAAU5B,EAAMO,OAAOJ,OAErG+C,GAAcnD,UAAY,SAASC,GAElC,SACQqC,IAAc,mBACXA,GAAWpC,UAAY,WAElC,CACCoC,EAAWpC,SAASD,IAItBkD,GAAcnB,QAAU,SAAS/B,GAEhC,SACQqC,IAAc,mBACXA,GAAWG,OAAS,WAE/B,CACCH,EAAWG,MAAMxC,KAIpB,MAAMuC,KAKPQ,GAAchB,QAAU,SAAS/B,GAEhC,SAAWqC,GAAWG,OAAS,WAC/B,CACCH,EAAWG,MAAMxC,KAKpBlB,GAAGC,UAAUoE,SAAW,SAAUzB,EAAUE,EAAWQ,EAAKC,GAE3D,GAAI3C,GAAUZ,EAAGC,UAAU4C,eAAeD,EAAUE,EAAW,YAAYwB,IAAIhB,EAE/E1C,GAAQqC,QAAU,SAAS/B,GAE1B,SAAWqC,GAAWG,OAAS,WAC/B,CACCH,EAAWG,MAAMxC,IAInBN,GAAQK,UAAY,SAASC,GAE5B,SAAWqC,GAAWpC,UAAY,WAClC,CACCoC,EAAWpC,SAASD,EAAMO,OAAOJ,UAKpCrB,GAAGC,UAAUsE,gBAAkB,SAAU3B,EAAUE,EAAWkB,EAAWV,EAAKC,GAE7E,GAAI3C,GAAUZ,EAAGC,UAAU4C,eAAeD,EAAUE,EAAW,YAAYoB,MAAMF,GAAWM,IAAIhB,EAEhG1C,GAAQqC,QAAU,SAAS/B,GAE1B,SAAWqC,GAAWG,OAAS,WAC/B,CACCH,EAAWG,MAAMxC,IAInBN,GAAQK,UAAY,SAASC,GAE5B,SAAWqC,GAAWpC,UAAY,WAClC,CACCoC,EAAWpC,SAASD,EAAMO,OAAOJ,UAKpCrB,GAAGC,UAAUuE,WAAa,SAAU5B,EAAUE,EAAW2B,EAAYlB,GAEpE,GAAImB,GAAW,IAEf,UAAWD,GAAWE,OAAS,YAC/B,CACC,SAAWF,GAAWG,OAAS,YAC/B,CACCF,EAAW3E,EAAOU,YAAYoE,MAAMJ,EAAWE,MAAOF,EAAWG,QAASH,EAAWK,YAAaL,EAAWM,eAG9G,CACCL,EAAW3E,EAAOU,YAAYuE,WAAWP,EAAWE,QAASF,EAAWK,gBAGrE,UAAWL,GAAWG,OAAS,YACpC,CACCF,EAAW3E,EAAOU,YAAYwE,WAAWR,EAAWG,QAASH,EAAWM,WAGzE,GAAInE,GAAUZ,EAAGC,UAAU4C,eAAeD,EAAUE,EAAW,YAAY0B,WAAWE,EAEtF9D,GAAQqC,QAAU,SAAS/B,GAE1B,SAAWqC,GAAWG,OAAS,WAC/B,CACCH,EAAWG,MAAMxC,IAInBN,GAAQK,UAAY,SAASC,GAE5B,SAAWqC,GAAWpC,UAAY,WAClC,CACC,GAAI+D,GAAShE,EAAMO,OAAOJ,MAC1B,IAAI6D,EACJ,CACC3B,EAAWpC,SAAS+D,EAAO7B,MAC3B6B,GAAO,iBAMXlF,GAAGC,UAAUkF,MAAQ,SAAUvC,EAAUE,EAAWS,GAEnD,GAAI3C,GAAUZ,EAAGC,UAAU4C,eAAeD,EAAUE,EAAW,YAAYqC,OAE3EvE,GAAQqC,QAAU,SAAS/B,GAE1B,SAAWqC,GAAWG,OAAS,WAC/B,CACCH,EAAWG,MAAMxC,IAInBN,GAAQK,UAAY,WAEnB,SAAWsC,GAAWpC,UAAY,WAClC,CACCoC,EAAWpC,SAASP,EAAQS,UAK/BrB,GAAGC,UAAUmF,eAAiB,SAAUC,EAAc9B,GAErD,GAAItD,GAAYF,EAAOE,WAAaF,EAAOI,cAAgBJ,EAAOK,iBAAmBL,EAAOM,WAC5FJ,GAAUmF,eAAeC,MAGxBtF"}