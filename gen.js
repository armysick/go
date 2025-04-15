const DOMAIN_COUNT = 10;
const FEATURE_COUNT = 20;

for (let d=1; d<=DOMAIN_COUNT; d++) {

    console.log(`call ng g @angular-architects/ddd:domain domain${d} --add-app`);

    for (let  f=1; f<=FEATURE_COUNT; f++) {

        console.log(`call ng g @angular-architects/ddd:feature feature${f} --domain domain${d} --entity entity${f}`);

    }

    console.log();

}