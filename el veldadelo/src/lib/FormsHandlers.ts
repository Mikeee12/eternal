import type { FormEvent } from 'react'
import type { NavigateFunction } from 'react-router-dom'
import { submitNetlifyForm } from './netlifyForm'

function collect(e: FormEvent<HTMLFormElement>) {
  const fd = new FormData(e.currentTarget)
  const data: Record<string, string> = {}
  fd.forEach((v, k) => (data[k] = String(v)))
  return data
}

export async function onSubmitContacto(e: FormEvent<HTMLFormElement>, nav: NavigateFunction) {
  e.preventDefault()
  await submitNetlifyForm('contacto', collect(e))
  nav('/gracias', { replace: true })
}

export async function onSubmitLuna(e: FormEvent<HTMLFormElement>, nav: NavigateFunction) {
  e.preventDefault()
  await submitNetlifyForm('luna-cinematica', collect(e))
  nav('/gracias/luna-cinematica', { replace: true })
}

export async function onSubmitPersonalizados(e: FormEvent<HTMLFormElement>, nav: NavigateFunction) {
  e.preventDefault()
  await submitNetlifyForm('personalizados', collect(e))
  nav('/gracias', { replace: true })
}

export async function onSubmitLegados(e: FormEvent<HTMLFormElement>, nav: NavigateFunction) {
  e.preventDefault()
  await submitNetlifyForm('legados', collect(e))
  nav('/gracias', { replace: true })
}

export async function onSubmitMemorias(e: FormEvent<HTMLFormElement>, nav: NavigateFunction) {
  e.preventDefault()
  await submitNetlifyForm('memorias', collect(e))
  nav('/gracias', { replace: true })
}
