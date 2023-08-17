This repository allow me to make a bridge between the repositories xgpu and xgpu-samples. 

The script "doc" in the package.json from xgpu do :
- npx tsjsondoc ./src ../xgpu-samples
- cd..
- cd xgpu-samples
- git add . 
- git commit -m "update documentation"
- git push (this push will be triggered by netlify that will update the page online )
- cd ..
- cd xgpu


From xgpu-samples point-of-view, the documenation become a simple iframe 

In short, it allow me to update the documentation without updating xgpu or xgpu-samples 

- 