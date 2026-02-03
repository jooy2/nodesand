export default function main(next: any) {
  process.stdout.write('Main');

  next();
}
