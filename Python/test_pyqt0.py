import sys
from PyQt5.QtCore import Qt
from PyQt5 import Qt
from PyQt5 import QtCore
from PyQt5 import QtGui

class MainWindow(Qt.QMainWindow):
    def __init__(self):
        super().__init__()
        self.initUI()

    def initUI(self):
        self.setWindowTitle("Hello World!")
        self.setGeometry(100,100,500,500)

        # Создание виджетов
        label = Qt.QLabel("Мое приложение", self)
        button = Qt.QPushButton("Нажми меня", self)
        # Размещение виджетов с помощью менеджера компоновки
        layout = Qt.QVBoxLayout()
        layout.addWidget(label)
        layout.addWidget(button)
        central_widget = Qt.QWidget()
        central_widget.setLayout(layout)
        self.setCentralWidget(central_widget)

    def keyPressEvent(self, event):
        # если нажата клавиша F11
        if event.key() == QtCore.Qt.Key_F11:
            # если в полный экран 
            if self.isFullScreen():
                # вернуть прежнее состояние
                self.showNormal()
            else:
                # иначе во весь экран
                self.showFullScreen()

if __name__ == '__main__':
    qt_launcher = Qt.QApplication(sys.argv)
    window = MainWindow()
    window.show()
    sys.exit(qt_launcher.exec_())