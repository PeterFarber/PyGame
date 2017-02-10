import pyjsdl as pygame
import pyjsdl as pygame
import pyjsdl as pygame

BLACK = (  0,   0,   0)
WHITE = (255, 255, 255)
BLUE =  (  0,   0, 255)
GREEN = (  0, 255,   0)
RED =   (255,   0,   0)

pygame.init()

screen = pygame.display.set_mode([640,480])

screen.fill(WHITE)

pygame.draw.rect(screen, BLACK, [150, 10, 50, 20])

pygame.display.flip()