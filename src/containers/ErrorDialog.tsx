import React, { memo, useCallback, useEffect } from 'react';
import { useAppSelector } from '../app/hooks';
import { getCryptoError } from '../app/selectors/crypto';

const ErrorDialog = () => {
  const error = useAppSelector(getCryptoError);
  const errorDialog = document.getElementById(
    'error_dialog',
  ) as HTMLDialogElement;

  useEffect(() => {
    if (error) {
      errorDialog?.showModal();
    } else {
      errorDialog?.close();
    }
  }, [errorDialog, error]);

  const handleRefresh = useCallback(() => {
    window.location.reload();
    errorDialog?.close();
  }, [errorDialog]);

  return (
    <>
      <dialog id="error_dialog" className="modal">
        <div className="modal-box rounded-none">
          <h3 className="font-bold text-lg">Oops!</h3>
          <p className="py-4">{error}</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                className="btn bg-main rounded-sm"
                onClick={handleRefresh}
              >
                Refresh
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default memo(ErrorDialog);
