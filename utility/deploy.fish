#!/usr/local/bin/fish

# generate script bundle 
npm run build 
# create build we upload to squarespace
npm run assemble 

# bust cache by inserting the current commit hash into the bundle filename 
set hash (git rev-parse --short HEAD)
set replacement bundle_$hash.js 
mv build/scripts/bundle.js build/scripts/$replacement
mv build/scripts/bundle.js.map build/scripts/$replacement.map
cat build/site.region | string replace -r 'bundle.js' $replacement > build/site.region

# upload 
squarespace deploy --force