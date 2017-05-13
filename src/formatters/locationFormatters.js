export function locationFormattedForScreen(location) {
  return `${location.address}, ${location.city}, ${location.province} ${location.postalCode}, ${location.country}`;
}
