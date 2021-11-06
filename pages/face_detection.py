import cv2
import os

# Initialize the Classifier file
cascPath = os.path.dirname(cv2.__file__)+"/data/haarcascade_frontalface_default.xml"

faceCascade = cv2.CascadeClassifier(cascPath)

# Face Rules for webcam
video_capture = cv2.VideoCapture(0)

while True:
    ret, frames = video_capture.read()
    gray = cv2.cvtColor(frames, cv2.COLOR_BGR2GRAY)
    # print("working-1")

    faces = faceCascade.detectMultiScale(
        gray,
        scaleFactor = 1.1, 
        minNeighbors = 5, 
        minSize = (30, 30),
        flags = cv2.CASCADE_SCALE_IMAGE
    )

    for (x, y, w, h) in faces:
        cv2.rectangle(frames, (x, y), (x+w, y+h), (0, 255, 0), 2)
        # print('working-2')
    cv2.imshow('Video', frames)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        # print('working3')
        break

# release captured frames
video_capture.release()
cv2.destroyAllWindows()

