<script>
  export let publicId;
  export let width = 450;
  export let height = 250;
  import { Cloudinary } from '@cloudinary/url-gen';
  import { fill } from '@cloudinary/url-gen/actions/resize';
  import { format, quality } from '@cloudinary/url-gen/actions/delivery';
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'tamas-demo'
    }
  })
  let myImage;
    myImage = cld.image(publicId)
    .resize(fill().width(width).height(height))
    .delivery(format('auto'))
    .delivery(quality('auto'));
  const src = myImage.toURL();
</script>
<img {src} alt="Product" class="w-full" />