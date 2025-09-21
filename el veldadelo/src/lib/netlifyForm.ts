export function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    .join('&')
}

export async function submitNetlifyForm(formName: string, data: Record<string, string>) {
  const body = encode({ 'form-name': formName, ...data })
  const resp = await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  })
  return resp.ok
}
