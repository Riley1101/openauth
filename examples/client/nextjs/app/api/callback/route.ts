// Before
export async function GET(request, segmentData) {
  const params = segmentData.params
  const slug = params.slug
}
 
// After
export async function GET(request, segmentData) {
  const params = await segmentData.params
  const slug = params.slug
}
