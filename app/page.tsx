'use client'
import { useState } from 'react'

import '@fontsource/roboto'
import {
  JBrowseCircularGenomeView,
  useCreateViewState,
} from '@jbrowse/react-circular-genome-view2'

import { assembly, tracks, view } from './config'

export default function App() {
  const state = useCreateViewState({ assembly, tracks, view })
  const [snapshot, setSnapshot] = useState('')
  if (!state) {
    return null
  }
  return (
    <>
      <h1>JBrowse 2 circular genome view with Next.js</h1>
      <JBrowseCircularGenomeView viewState={state} />
      <h3>Code</h3>
      <p>
        The code for this app is at{' '}
        <a href="https://github.com/GMOD/jbrowse-react-circular-genome-view-nextjs-demo">
          https://github.com/GMOD/jbrowse-react-circular-genome-view-nextjs-demo
        </a>
        .
      </p>
      <h3>Control the view</h3>
      <p>Each button rotates the view an eighth of a turn.</p>
      <button
        onClick={() => {
          state.session.view.rotate(Math.PI / 4)
        }}
      >
        Rotate clockwise
      </button>
      <button
        onClick={() => {
          state.session.view.rotate(-Math.PI / 4)
        }}
      >
        Rotate counter clockwise
      </button>
      <h3>See the state</h3>
      <p>
        The button below shows the current session, which includes the region
        the view is showing and which tracks are open. Pass this object back as{' '}
        <code>session</code> to restore it.
      </p>
      <button
        onClick={() => {
          setSnapshot(JSON.stringify(state.session, undefined, 2))
        }}
      >
        Show session
      </button>
      <textarea value={snapshot} readOnly rows={20} cols={80} />
    </>
  )
}
