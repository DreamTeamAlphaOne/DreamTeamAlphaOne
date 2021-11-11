from tensorflow.keras import models
import cv2
import dlib
import numpy as np
import pandas as pd
from tqdm import tqdm
import os


def faceDec():
    detector = dlib.get_frontal_face_detector()

    predictor = dlib.shape_predictor("pages/shape_predictor_68_face_landmarks.dat")

    cap = cv2.VideoCapture(0)

    while True:
        __, frame = cap.read()
        gray = cv2.cvtColor(src=frame, code=cv2.COLOR_BGR2GRAY)
        faces = detector(gray)
        for face in faces:
            x1 = face.left()
            y1 = face.top()
            x2 = face.right()
            y2 = face.bottom()

            landmarks = predictor(image=gray, box=face)

            for n in range(0, 67):
                x = landmarks.part(n).x
                y = landmarks.part(n).y
                cv2.circle(img=frame, center=(x, y), radius=3, color=(0,255,0), thickness=-1)
        cv2.imshow(winname="face", mat=frame)

        if cv2.waitKey(delay=1) & 0xFF == ord('q'):
            break
    cap.release()
    cv2.destroyAllWindows()
    
faceDec()

