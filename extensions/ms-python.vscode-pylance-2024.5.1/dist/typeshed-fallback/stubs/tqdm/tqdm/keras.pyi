from _typeshed import Incomplete

__all__ = ["TqdmCallback"]

# keras.callbacks.Callback
class _Callback:
    validation_data: Incomplete | None
    model: Incomplete | None
    params: Incomplete
    def __init__(self) -> None: ...
    def set_params(self, params) -> None: ...
    def set_model(self, model) -> None: ...
    def on_batch_begin(self, batch, logs: Incomplete | None = ...) -> None: ...
    def on_batch_end(self, batch, logs: Incomplete | None = ...) -> None: ...
    def on_epoch_begin(self, epoch, logs: Incomplete | None = ...) -> None: ...
    def on_epoch_end(self, epoch, logs: Incomplete | None = ...) -> None: ...
    def on_train_batch_begin(self, batch, logs: Incomplete | None = ...) -> None: ...
    def on_train_batch_end(self, batch, logs: Incomplete | None = ...) -> None: ...
    def on_test_batch_begin(self, batch, logs: Incomplete | None = ...) -> None: ...
    def on_test_batch_end(self, batch, logs: Incomplete | None = ...) -> None: ...
    def on_predict_batch_begin(self, batch, logs: Incomplete | None = ...) -> None: ...
    def on_predict_batch_end(self, batch, logs: Incomplete | None = ...) -> None: ...
    def on_train_begin(self, logs: Incomplete | None = ...) -> None: ...
    def on_train_end(self, logs: Incomplete | None = ...) -> None: ...
    def on_test_begin(self, logs: Incomplete | None = ...) -> None: ...
    def on_test_end(self, logs: Incomplete | None = ...) -> None: ...
    def on_predict_begin(self, logs: Incomplete | None = ...) -> None: ...
    def on_predict_end(self, logs: Incomplete | None = ...) -> None: ...

class TqdmCallback(_Callback):
    @staticmethod
    def bar2callback(bar, pop: Incomplete | None = None, delta=...): ...
    tqdm_class: Incomplete
    epoch_bar: Incomplete
    on_epoch_end: Incomplete
    batches: Incomplete
    verbose: Incomplete
    batch_bar: Incomplete
    on_batch_end: Incomplete
    def __init__(
        self,
        epochs: Incomplete | None = None,
        data_size: Incomplete | None = None,
        batch_size: Incomplete | None = None,
        verbose: int = 1,
        tqdm_class=...,
        **tqdm_kwargs,
    ) -> None: ...
    def on_train_begin(self, *_, **__) -> None: ...
    def on_epoch_begin(self, epoch, *_, **__) -> None: ...
    def on_train_end(self, *_, **__) -> None: ...
    def display(self) -> None: ...
