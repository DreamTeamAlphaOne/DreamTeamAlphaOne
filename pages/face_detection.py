import cv2
import os
import dlib
import numpy as np




def findFace():
    # detector
    detector = dlib.get_frontal_face_detector()
    # Predictor
    predictor = dlib.shape_predictor("pages/shape_predictor_68_face_landmarks.dat")
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
            flags = cv2.CASCADE_SCALE_IMAGE,
        )

        # for (x, y, w, h) in faces:
        #     cv2.rectangle(frames, (x, y), (x+w, y+h), (0, 255, 0), 2)
        #     # print('working-2')
        for face in faces:
            x1 = face.left()
            y1 = face.top()
            x2 = face.right()
            y2 = face.bottom()

            cv2.rectangle(frames, pt1 = (x1, y1), pt2 = (x2, y2), color=(255, 0, 0), thickness=4)

            landmarks = predictor(image = gray, box = face)
            # x = landmarks.part(27).x
            # y = landmarks.part(27).y
            for n in range(0, 28):
                x = landmarks.part(n).x
                y = landmarks.part(n).y

            cv2.circle(faces, center = (x, y), radius = 3, color = (0, 255, 0), thickness=3)
        # Wait key to stop video screen from shutting down
        cv2.imshow('Detecting Emotion', frames)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            # print('working3')
            break
    # release frames
    video_capture.release()
    cv2.destroyAllWindows()

findFace()

# def findEmot():
#     detector = dlib.get_frontal_face_detector()
#     predictor = dlib.shape_predictor("shape_predictor_68_face_landmark")

#     # video = findFace()

#     # faces = detector()
#     for face in findFace():
#         x1 = face.left()
#         y1 = face.top()
#         x2 = face.right()
#         y2 = face.bottom()

#     landmarks = predictor(findFace(), box=face)
#     x = landmarks.part(27).x
#     y = landmarks.part(27).y

#     cv2.circle(img=findFace(), center=(x, y), radius=5, color=(0,255,0), thickness =-1)

# findEmot()