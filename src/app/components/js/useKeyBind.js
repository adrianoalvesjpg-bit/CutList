import { useEffect } from 'react';

export default function useKeyBind(key, callback, { enabled = true } = {}) {
  useEffect(() => {
    if (!enabled) return;

    function handleKeyDown(event) {
      // ignora se o foco estiver em um input/textarea, pra não atrapalhar digitação
      const tag = event.target.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;

      if (event.key === key) {
        event.preventDefault();
        callback(event);
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [key, callback, enabled]);
}