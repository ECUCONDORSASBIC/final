'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { auth } from '@/lib/auth'

export default function SignInWithGoogle() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSignIn = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const { success, message } = await auth.signInWithGoogle()
      
      if (!success && message) {
        setError(message)
      }
    } catch (err) {
      console.error('Error al iniciar sesión:', err)
      setError('Error inesperado al iniciar sesión')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <Button
        variant="outline"
        onClick={handleSignIn}
        disabled={loading}
        className="w-full max-w-sm"
      >
        {loading ? (
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 animate-spin rounded-full border-b-2 border-gray-900" />
            <span>Iniciando sesión...</span>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
            </svg>
            <span>Continuar con Google</span>
          </div>
        )}
      </Button>
      {error && (
        <div className="text-red-500 text-sm mt-2">
          {error}
        </div>
      )}
    </div>
  )
}
