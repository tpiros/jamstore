<script>
  import { onMount } from 'svelte';
  onMount(() => {
    const source = {
      shoppable: {
        transformation: {
          crop: 'pad',
          aspect_ratio: '1'
        },
        products: [
          {
            productId: 1,
            productName: 'Sunglasses',
            startTime: 0,
            endTime: 2,
            publicId: 'jamstack-training/svelte/sunglasses',
            hotspots: [
              {
                time: '00:02',
                x: '50%',
                y: '50%',
                tooltipPosition: 'left',
                clickUrl: '/sunglasses'
              }
            ],
            onHover: {
              action: 'overlay',
              args: 'Click to see this product in the video'
            },
            onClick: {
              action: 'seek',
              pause: 5,
              args: {
                time: '00:02'
              }
            }
          },
          {
            productId: 2,
            productName: 'Green Dress',
            startTime: 2,
            endTime: 5,
            publicId: 'jamstack-training/svelte/dress',
            onClick: {
              action: 'goto',
              pause: true,
              args: {
                url: '/dress'
              }
            }
          },
          {
							productId: 3,
							productName: 'Brown Bag',
							startTime: 7,
							endTime: 11,
							publicId: 'jamstack-training/svelte/bag',
							onHover: {
								action: 'switch',
								args: {
									publicId: 'jamstack-training/svelte/bag2'
								}
							},
							onClick: {
								action: 'goto',
								pause: true,
								args: {
									url: '/bag'
								}
							}
						}
        ]
      }
    }
    const myCloudinary = window.cloudinary.videoPlayer('fashion-player', {
  cloud_name: 'tamas-demo'
});
myCloudinary.source('jamstack-training/svelte/model', source)
  })

</script>

<div class="mx-auto w-3/4 my-6">
	<h3 class="text-gray-700 text-3xl font-bold mb-5">Shop the video</h3>
	<video id="fashion-player" controls muted class="cld-video-player cld-fluid" />
</div>