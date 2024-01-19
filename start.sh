docker build -t doc-page-image .
docker run -p 3000:80 doc-page-image
